import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="SavvyCal"
        src="/logo-cloud/bike1.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Laravel"
        src="/logo-cloud/sharing1.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Tuple"
        src="/logo-cloud/AI1.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Transistor"
        src="/logo-cloud/taxi1.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Statamic"
        src="/logo-cloud/train1.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
  )
}
