import Link from "next/link";
import React from "react";

interface DocumentProps {
  id: string;
}

interface EditorDocument {
  document?: DocumentProps;
}

export default function Breadcrumb({ document }: EditorDocument) {
  const baseUri = "/editor";
  return (
    <div className="flex items-center text-md text-gray-600">
      <Link href={baseUri} className=" hover:text-black">
        Documents
      </Link>
      {document && (
        <>
          <span className="mx-2"> / </span>
          <div className="text-gray-600">{document.id}</div>
        </>
      )}
    </div>
  );
}
