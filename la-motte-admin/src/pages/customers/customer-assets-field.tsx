import {useDataProvider, useRecordContext} from 'react-admin'
import { useEffect, useState } from 'react'

const CustomerAssetsField = () => {
    const record = useRecordContext();
    const dataProvider = useDataProvider()
    const [assets, setAssets] = useState([])
    console.log('record: ' + JSON.stringify(record))

    useEffect(() => {
        if (!record?.id) return;

        dataProvider
            .getCustomerAssets({ customerId: record.id })
            .then(({ data }) => setAssets(data))
    }, [record, dataProvider])

    if (!assets.length) return <p>No assets</p>

    return (
        <ul>
            {assets.map(a => (
                <li key={a.asset_id}>
                    {a.name} ({a.code})
                </li>
            ))}
        </ul>
    )
}

export default CustomerAssetsField;