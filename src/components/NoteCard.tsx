import {Note} from "@prisma/client";
import {useState} from "react";
import ReactMarkdown from "react-markdown";

interface NoteCardProps {
    note: Note,
    onDelete: () => {}
}
export const NoteCard = ({ note, onDelete }: NoteCardProps): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    return (
        <div className="card mt-5 border border-gray-200 bg-base-600 shadow-xl">
            <div className="card-body m-0 p-3">
                <div className={`collapse-arrow ${isExpanded ? 'collapse-open' : ""} collapse`}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="collapse-title text-xl font-bold">{note.title}</div>
                    <div className="collapse-content">
                        <article className="prose lg:prose-xl">
                            <ReactMarkdown>{note.content}</ReactMarkdown>
                        </article>
                    </div>
                    <div className="card-actions mx-2 flex justify-end">
                        <button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
