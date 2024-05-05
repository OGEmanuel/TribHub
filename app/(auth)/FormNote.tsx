import Link from "next/link";

const FormNote = ({
  question,
  linkTo,
  link,
  className,
}: {
  className?: string;
  question: string;
  linkTo: string;
  link: string;
}) => {
  return (
    <p className={`text-center text-sm ${className}`}>
      {question}{" "}
      <Link href={link} className="font-semibold text-primarys300">
        {linkTo}
      </Link>
    </p>
  );
};

export default FormNote;
