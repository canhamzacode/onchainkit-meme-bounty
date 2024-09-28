import { Table } from "antd";
import { Coin } from '../../types/Coin';
import { getColumns } from './column';

interface CoinTableProps {
  coins: Coin[];
  loading: boolean;
}

export const CoinTable: React.FC<CoinTableProps> = ({ coins, loading }) => {
  return (
    <div className="mt-6">
        <Table 
          columns={getColumns()} 
          dataSource={coins} 
          loading={loading} 
          rowKey={(record) => record.index.toString()}
        />
    </div>
  );
};