
export const MsgAlert = ({ texto, clases, query }) => {
  return (
    <div
        className={clases}
    > 
        {texto} <b>{ query }</b> 
    </div>
  )
}
