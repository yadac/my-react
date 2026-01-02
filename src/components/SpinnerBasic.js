export default function SpinnerBasic() {
    return (
        <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-gray-400 border-t-transparent"
            role="status"
            aria-label="Loading"
        />
    );
}
