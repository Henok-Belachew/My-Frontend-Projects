
function getNum(tag: string): number {
    switch (tag.toLowerCase()) {
        case 'junior':
            return 2;
        case 'advanced':
            return 4;
        case 'intermediate':
            return 3;
        case 'guru':
            return 5;
        case 'newbie':
        default:
            return 1; // Default value for 'newbie' tag
    }
}

function TagGenerator({ tag }: { tag: string }) {

    const num = getNum(tag); // Get the corresponding numeric value for the tag
    return (
        <div className={`flex gap-2  ${tag} h-[25px] font-Heebo items-center font-bold text-[14px] rounded-md overflow-hidden border-[1px]  pr-2`}>
            <span className={`px-3 py-1  text-white`}>
                {num}
            </span>
            {tag.toUpperCase()}
        </div>
    );
}

export default TagGenerator;