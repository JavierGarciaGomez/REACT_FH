type Props = { title: string; subtitle: string; name: string };

export const FirstApp = ({ title, subtitle, name }: Props) => (
  <>
    <h1 data-testid="test-title"> {title} </h1>
    {/* <code>{ JSON.stringify( newMessage ) }</code> */}
    <p>{subtitle}</p>
    <p>{subtitle}</p>
    <p>{name}</p>
  </>
);
