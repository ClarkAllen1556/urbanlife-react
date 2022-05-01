export default function Education() {
  const Entry = ({ children }) => <div className="mb-5">{children}</div>;

  return (
    <div>
      <Entry>
        <p>
          <em>Boise State University</em> ~ Boise, Idaho, USA
        </p>
        <p>
          <strong>Bachelor’s of Science</strong>,{' '}
          <strong>Computer Science</strong> &amp;{' '}
          <strong>Japanese Studies minor</strong> August 2019
        </p>
      </Entry>

      <Entry>
        <p>
          <em>Hosei University</em> ~ Tokyo, Japan
        </p>
        <p>
          <strong>Foreign Exchange</strong>,{' '}
          <strong>Japanese Language Study</strong>, September 2017 to August
          2018
        </p>
      </Entry>
    </div>
  );
}
