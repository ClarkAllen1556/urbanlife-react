import avatarUrl from '/assets/allen_head_1.jpeg';
export default function Avatar() {
  return (
    <img
      className="rounded-full w-40 mx-auto border-2 border-white"
      src={avatarUrl}
    />
  );
}
