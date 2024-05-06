import Control from "./control";

const LoginPage = () => {
  return (
    <section className="before:absolute before:w-full before:h-full before:bg-[url('/images/auth-bg.png')] before:opacity-5 before:-z-10 z-50 relative py-[7.3125rem]">
      {/* <div className="w-max bg-neutralN0 mx-auto"> */}
      <Control />
      {/* </div> */}
    </section>
  );
};

export default LoginPage;
