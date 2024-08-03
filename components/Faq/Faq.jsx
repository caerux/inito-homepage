import Qna from "./Qna";

const Faq = () => {
  return (
    <section className="my-20 container  mx-auto justify-center items-center max-w-[1024px] p-5 md:p-0">
      <div className="md:max-w-[50%] mx-auto mb-10 text-center items-center justify-center">
        <div className="text-[#112D35] font-bold text-3xl md:text-4xl">
          Your top{" "}
          <span className="relative inline-block">
            {" "}
            questions,{" "}
            <img
              src="/assets/Faq/ellipse.svg"
              className="absolute -top-2 w-72 scale-110 right-1"
            />
          </span>{" "}
          answered
        </div>
      </div>
      <div>
        <Qna />
      </div>
    </section>
  );
};

export default Faq;
