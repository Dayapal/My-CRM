import {

    Calendar,

    User,

} from "lucide-react";

import {

    format,

} from "date-fns";

import FileTypeIcon
    from "./FileTypeIcon";

import DocumentActions
    from "./DocumentActions";

interface Props {

    document: any;

}

export default function DocumentCard({

    document,

}: Props) {

    return (

        <div

            className="rounded-xl border bg-white p-5 shadow-sm"

        >

            <div className="flex items-start justify-between">

                <div className="flex gap-4">

                    <FileTypeIcon

                        mimeType={
                            document.mimeType
                        }

                    />

                    <div>

                        <h3 className="font-semibold">

                            {document.title}

                        </h3>

                        <p className="text-sm text-slate-500">

                            {document.originalName}

                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">

                            <span
                                className="
                      rounded-full
                      bg-blue-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-blue-700
                    "
                            >
                                {document.entityType}
                            </span>

                            <span
                                className="
                      rounded-full
                      bg-slate-100
                      px-3
                      py-1
                      text-xs
                    "
                            >
                                {(
                                    document.size /
                                    1024
                                ).toFixed(1)}
                                {" "}KB
                            </span>

                        </div>

                    </div>

                </div>

                <DocumentActions
                    document={document}
                />

            </div>

            <div
                className="
              mt-6
              flex
              items-center
              justify-between
              border-t
              pt-4
              text-sm
              text-slate-500
            "
            >

                <div className="flex items-center gap-2">

                    <User
                        className="h-4 w-4"
                    />

                    <span>

                        {
                            document.uploadedBy
                                ?.firstName
                        }{" "}

                        {
                            document.uploadedBy
                                ?.lastName
                        }

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <Calendar
                        className="h-4 w-4"
                    />

                    <span>

                        {format(

                            new Date(
                                document.createdAt
                            ),

                            "dd MMM yyyy"

                        )}

                    </span>

                </div>

            </div>

        </div>

    );

}