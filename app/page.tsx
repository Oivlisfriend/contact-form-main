
export default function Home() {
  return (
    <div className="bg-emerald-50 h-screen flex justify-center items-center">
      <form className="flex flex-col gap-5 w-80 lg:w-[36rem] xl:w-[36rem] 2xl:w-[36rem] px-6 py-8 rounded-md bg-white">
        <h1 className="font-bold text-xl">Contact Us</h1>
        <div className="flex gap-3 flex-col lg:flex-row xl:flex-row 2xl:flex">
          <div className="flex flex-1 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex-col gap-1.5">
            <p className="text-sm">First Name <span className="text-emerald-700">*</span></p>
            <input className="flex-1 border-2 outline-none ps-1 rounded-md py-1" name="name" id="name" required />
          </div>
          <div className="flex flex-col flex-1 lg:w-1/2 xl:w-1/2 2xl:w-1/2 gap-1.5">
            <p className="text-sm">Last Name <span className="text-emerald-700">*</span></p>
            <input className="flex-1 border-2 outline-none ps-1 rounded-md py-1" name="name" id="name" required />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">Email Address <span className="text-emerald-700">*</span></p>
          <input className="flex-1 border-2 outline-none ps-1 rounded-md py-1" name="name" id="name" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">Query Type <span className="text-emerald-700">*</span></p>
          <div className="flex gap-4 lg:gap-2 xl:gap-2 2xl:gap-2 flex-col lg:flex-row xl:flex-row 2xl:flex-row">
            <div className="flex gap-1 flex-1 lg:w-1/2 xl:w-1/2 2xl:w-1/2 border-2 rounded-md px-4 py-1">
              <input type="radio" className="border-2 outline-none ps-1 rounded-md py-1" name="name" id="name" required />
              <span>General Enquiry</span>
            </div>
            <div className="flex gap-1 flex-1 lg:w-1/2 xl:w-1/2 2xl:w-1/2 border-2 rounded-md px-4 py-1">
              <input type="radio" className="border-2 outline-none ps-1 rounded-md py-1" name="name" id="name" required />
              <span>Support Request</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">Message <span className="text-emerald-700">*</span></p>
          <textarea rows={3.5} className="flex-1 border-2 outline-none ps-1 rounded-md py-1" name="name" id="name" required />
        </div>
        <div className="flex gap-3.5 items-center">
          <input type="checkbox" name="" id="" required />
          <span className="text-sm">I consent to being contacted by the team</span>
        </div>
        <div className="bg-emerald-700 text-sm py-2.5 text-center font-medium rounded-lg text-white">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
