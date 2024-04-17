import Link from "next/link";

const page = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="w-full relative min-h-[274px] flex-col rounded-xl text-center sm:mr-3">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-gradient_blue-purple capitalize ">
            Privacy policy
          </h1>
          <p className="text-white-400 text-left m-3 p-4">
            Copyright @2024 Material displayed on this website cannot be
            endorsed for any kind of monetary consideration in any such manner.
            The material has displayed accurately for educational purpose and
            not to be used in a derogatory manner or in a misleading context.
            The source of material is prominently acknowledged on the material
            itself, however if any material which is identified as being
            copyrighted material of a third party, please write us{" "}
            <Link
              href="mailto:vishalbusiness3108@gmail.com"
              target="_blank"
              className="text-[#3291ff] underline"
            >
              vishalbusiness3108@gmail.com
            </Link>{" "}
            for copyright claim.
          </p>
          <h2 className="text-white heading3 text-left m-3 p-4">
            Changes To This Privacy Policy
          </h2>
          <p className="text-white-400 text-left m-3 p-4">
            We may update our Privacy Policy from time to time. We will notify
            but we suggest that you review it from time to time, as our Platform
            may change. As a result, at times it may be necessary for V Notes to
            make changes to this Privacy Policy. V Notes reserves the right to
            update or modify this Privacy Policy at any time and from time to
            time without prior notice. Your continued use of the Platform after
            any changes or revisions to this Privacy Policy shall indicate your
            agreement with the terms of such revised Privacy Policy.
          </p>
          <h2 className="text-white heading3 text-left m-3 p-4">Contact Us</h2>
          <p className="text-white-400 text-left m-3 p-4">
            If you have any questions or suggestions regarding this Privacy
            Policy, please contact us at{" "}
            <Link
              href="mailto:vishalbusiness3108@gmail.com"
              target="_blank"
              className="text-[#3291ff] underline"
            >
              vishalbusiness3108@gmail.com
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
