import AnimatedDiv from "../AnimatedDiv";
import Avatar from "../Avatar";
import Breadcrumb from "../breadcrumb";

interface Props {
  documentId: string;
}
export default function EditorNav({ documentId }: Props) {
  const document = {
    id: documentId,
  };
  const name = "Anonymous";

  return (
    <div className="flex w-full justify-between md:px-12 py-8 px-4 items-center">
      <AnimatedDiv transition={{ duration: 0.3, ease: "linear" }}>
        <Breadcrumb document={document} />
      </AnimatedDiv>
      <AnimatedDiv transition={{ duration: 0.3, ease: "linear" }}>
        <Avatar name={name} />
      </AnimatedDiv>
    </div>
  );
}
