const Newsletter = () => {

    return (
        <section className="p-8 bg-[#c33b32] lg:pt-2.5">
          <div className="max-w-container mx-auto">
            <div className="flex flex-wrap">
              <h3 className="text-[33px] text-white font-bold">UTRADE Newsletter</h3>
        
              <div className="border-0 text-center w-full">
                <div className="">
                  <form>
                    <fieldset className="flex flex-nowrap gap-4 max-w-[920px] mx-auto">
                      <div className="w-2/4">
                        <label htmlFor="firstname" className="text-[13px] text-white font-bold">
                          <span>Name</span>
                        </label>
                        <div className="input">
                          <input
                            id="firstname"
                            type="text"
                            className="w-full text-[1em] border-2 border-[#ABB0B2] text-[#343434] bg-white rounded-[3px] mt-2 mb-5 w-full h-[40px] p-2.5"
                            inputMode="text"
                            autoComplete="given-name"
                        />
                        </div>
                      </div>
        
                      <div className="w-2/4">
                        <label htmlFor="email" className="text-[13px] text-white font-bold">
                          <span>Email</span><span className="hs-form-required">*</span>
                        </label>
                        <div className="input">
                          <input
                            id="email"
                            type="email"
                            className="w-full text-[1em] border-2 border-[#ABB0B2] text-[#343434] bg-white rounded-[3px]  mt-2  mb-5 w-full h-[40px] p-2.5"
                            inputMode="email"
                            autoComplete="email"
                            required
                          />
                        </div>
                      </div>
                    </fieldset>
        
                    <div className="hs_submit hs-submit">
                      <div className="actions">
                        <button type="submit" className="text-[#333] bg-white border-[#ccc] py-1.5 px-3 mb-0 text-sm font-normal leading-[1.42857143] text-center whitespace-nowrap align-middle touch-manipulation cursor-pointer select-none border-[1px] border-transparent rounded-md" >Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Newsletter;
