import logUrl from '/assets/logo.png';

export default function Header() {
  return (
    <div
      className=" flex min-h-min items-center gap-5 mb-5 ml-5 mr-5 p-2 border-b-2
        border-l-2 border-r-2 rounded-b-md border-b-blue-600 border-l-blue-600
       border-r-blue-600 bg-slate-400
      "
    >
      <img className="scale-75" src={logUrl} />
      <h1 className=""> The Allen C. @ The Urbanlife </h1>
    </div>
  );
}
