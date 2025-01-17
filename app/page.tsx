
export default function Home() {
  return (
    <main className="bg-emerald-50 h-screen flex justify-center items-center">
      <form className="flex flex-col gap-5 w-80 lg:w-[36rem] xl:w-[36rem] 2xl:w-[36rem] px-6 py-8 rounded-md bg-white">
        <h1 className="font-bold text-xl">Contact Us</h1>
        <div className="flex gap-3 flex-col lg:flex-row xl:flex-row 2xl:flex">
          <div className="flex flex-1 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex-col gap-1.5">
            <p className="text-sm">First Name <label htmlFor="firstname" className="text-emerald-700">*</label></p>
            <input className="flex-1 border-2 outline-none ps-1 rounded-md py-1" required id="firstname" type="text" />
          </div>
          <div className="flex flex-col flex-1 lg:w-1/2 xl:w-1/2 2xl:w-1/2 gap-1.5">
            <p className="text-sm">Last Name <label htmlFor="lastname" className="text-emerald-700">*</label></p>
            <input className="flex-1 border-2 outline-none ps-1 rounded-md py-1" id="lastname" type="text" required />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">Email Address <label htmlFor="email" className="text-emerald-700">*</label></p>
          <input className="flex-1 border-2 outline-none ps-1 rounded-md py-1" id="email" type="email" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">Query Type <label className="text-emerald-700">*</label></p>
          <div className="flex gap-4 lg:gap-2 xl:gap-2 2xl:gap-2 flex-col lg:flex-row xl:flex-row 2xl:flex-row">
            <div className="flex gap-1 flex-1 lg:w-1/2 xl:w-1/2 2xl:w-1/2 border-2 rounded-md px-4 py-1">
              <input type="radio" id="querytype1" className="border-2 outline-none ps-1 rounded-md py-1" name="Query Type" required />
              <label htmlFor="querytype1" >General Enquiry</label>
            </div>
            <div className="flex gap-1 flex-1 lg:w-1/2 xl:w-1/2 2xl:w-1/2 border-2 rounded-md px-4 py-1">
              <input id="querytype2" type="radio" className="border-2 outline-none ps-1 rounded-md py-1" name="Query Type" required />
              <label htmlFor="querytype2">Support Request</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">Message <label htmlFor="message" className="text-emerald-700">*</label></p>
          <textarea rows={3.5} className="flex-1 border-2 outline-none ps-1 rounded-md py-1" id="message" required />
        </div>
        <div className="flex gap-3.5 items-center">
          <input type="checkbox" name="" id="checkbox" required />
          <label htmlFor="checkbox" className="text-sm">I consent to being contacted by the team</label>
        </div>
        <div className="bg-emerald-700 text-sm py-2.5 text-center font-medium rounded-lg text-white">
          <button type="submit">Submit</button>
        </div>
      </form>
    </main >
  );
}
