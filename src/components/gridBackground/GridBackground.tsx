interface GridBackgroundProps {
    lineColor?: string;
    className?: string;
}

const GridBackground = ({
    lineColor = "rgba(163, 230, 53, 0.15)",
    className = "",
}: GridBackgroundProps) => {
    return (
        <div
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{
                "--grid-line-color": lineColor,
            } as React.CSSProperties}
        >
            <div className="grid-background absolute inset-0" />
        </div>
    );
};

export default GridBackground;