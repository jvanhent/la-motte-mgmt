import {
    SelectInput,
    SelectInputProps,
    useDataProvider,
} from "react-admin";

import { useFormContext } from "react-hook-form";
import { useState } from "react";

type Props = SelectInputProps & {
    reference: string;
    sourceFieldToPropagate: string; // bv "ref_price"
    targetField: string;            // bv "ref_price"
};

export default function SelectInputWithPropagation({
                                                       source,
                                                       reference,
                                                       sourceFieldToPropagate,
                                                       targetField,
                                                       onChange,
                                                       ...rest
                                                   }: Props) {
    const { setValue } = useFormContext();
    const dataProvider = useDataProvider();

    const [loading, setLoading] = useState(false);

    return (
        <SelectInput
            {...rest}
            source={source}
            onChange={async (event) => {
                const id = event.target.value;

                onChange?.(event);

                if (!id) return;

                setLoading(true);

                try {
                    const { data } = await dataProvider.getOne(
                        reference,
                        { id }
                    );

                    const value = (data as any)?.[sourceFieldToPropagate];

                    if (value !== undefined) {
                        setValue(targetField, value, {
                            shouldDirty: true,
                            shouldTouch: false,
                            shouldValidate: false,
                        });
                    }
                } finally {
                    setLoading(false);
                }
            }}
            disabled={loading || rest.disabled}
        />
    );
}