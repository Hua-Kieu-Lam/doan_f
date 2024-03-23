
type Props = {
    total: number,
    search: string
}
export default function SearchResult({ total, search }: Props) {
    return (
        <div className='flex flex-col justify-between lg:items-center lg:flex-row gap-3'>
            <span>{total} ket qua tim kiem cho {search}</span>
            sort by...
        </div>
    )
}
