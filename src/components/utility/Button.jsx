
export default function Button({className, width, type, id, name, disabled, onClick, children}) {
  const widthClass = useRegex(width) ? width : 'w-9/12'

  return (
    <button onClick={onClick} 
    className={`block mx-auto bg-[#0095f6] py-2 rounded border-[#0095f6] 
    text-white font-bold disabled:opacity-50 ${widthClass} ${className}`} type={type}
    id={id} name={name ?? id} disabled={disabled}>{children ?? 'Button'}</button>
  )
}
// Todu => make into utility function
function useRegex(input) {
  if(!input) return false
  let regex = /w-/i;
  return regex.test(input);
}