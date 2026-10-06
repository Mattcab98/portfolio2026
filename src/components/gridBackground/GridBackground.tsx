interface GridBackgroundProps {
    backgroundColor?: string;
    lineColor?: string;
}

const GridBackground = ({
    backgroundColor = "#09090b",
    lineColor = "rgba(163, 230, 53, 0.15)",
}: GridBackgroundProps) => {
    return (
        <div
            className="absolute inset-0 overflow-hidden"
            style={{
                backgroundColor,
                "--grid-line-color": lineColor,
            } as React.CSSProperties}
        >
            <div className="grid-background absolute -inset-20" />
        </div>
    );
};

export default GridBackground;