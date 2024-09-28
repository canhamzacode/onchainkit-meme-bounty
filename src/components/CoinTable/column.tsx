import { Tag } from "antd";

export const getColumns = () => [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'address',
      render: (text: string) => {
        return <div className="flex items-center gap-1">
          <div className='w-8 h-8 bg-red-300 rounded-full flex items-center justify-center'>
            <span className='text-white text-xl font-bold capitalize'>{text.charAt(0)}</span>
          </div>
          <span>{text}</span>
        </div>
      }
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "1hr %",
      dataIndex: "1hr",
      key: "1hr",
      render: (text: string) => {
        if (text.startsWith('-')) {
          return <Tag color="red">{text}</Tag>;
        }
        return <Tag color="green">{text}</Tag>;
      }
    },
    {
      title: "24hr %",
      dataIndex: "24hr",
      key: "24hr",
      render: (text: string) => {
        if (text.startsWith('-')) {
          return <Tag color="red">{text}</Tag>;
        }
        return <Tag color="green">{text}</Tag>;
      }
    },
    {
      title: "7d %",
      dataIndex: "7d",
      key: "7d",
      render: (text: string) => {
        if (text.startsWith('-')) {
          return <Tag color="red">{text}</Tag>;
        }
        return <Tag color="green">{text}</Tag>;
      }
    },
    {
      title: "Market Cap",
      dataIndex: "marketCap",
      key: "marketCap",
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
    },
    {
      title: "Circulating Supply",
      dataIndex: "circulatingSupply",
      key: "circulatingSupply",
      render: (supply: { supplyInDollars: string, supplyFormatted: string }) => (
        <>
          <div className='text-sm font-bold mb-1'>{supply.supplyInDollars}</div>
          <div className='text-sm'>{supply.supplyFormatted}</div>
        </>
      )
    },
    {
      title: "Change",
      dataIndex: "change",
      key: "change",
    },
]