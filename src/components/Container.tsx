export const Container = ({children, className}: { children: any, className?: string }): JSX.Element => {
    return (
        <div className={`w-full px-4 ${className}`}>
            {children}
        </div>
    )
}