import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
    return (
        <Image
            src="/assets/black_vertical.svg" // Relative to the public folder
            alt="YoYo"
            className={className}
            width={200} // Adjust dimensions as needed
            height={100}
        />
    );
}

export function Mark() {
    return <div>YoYo</div>; // Placeholder if you still need this
}