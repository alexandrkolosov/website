import { clsx } from 'clsx'

export function Gradient({
                             className,
                             ...props
                         }: React.ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            {...props}
            className={clsx(
                className,
                // Updated gradient: direction "to top left", from black to light grey
                'bg-[linear-gradient(to_top_left,var(--tw-gradient-stops))] from-grey to-[#ffbe0b]'
            )}
        />
    )
}

export function GradientBackground() {
    return (
        <div className="relative mx-auto max-w-7xl">
            <div
                className={clsx(
                    'absolute -top-44 -right-60 h-60 w-[36rem] transform-gpu md:right-0',
                    // Updated gradient with the same changes
                    'bg-[linear-gradient(to_top_left,var(--tw-gradient-stops))] from-grey to-[#ffbe0b]',
                    'rotate-[-10deg] rounded-full blur-3xl'
                )}
            />
        </div>
    )
}