import './App.css';

function App() {
const handleData = (e) => {
  e.preventDefault()
  var fdata = new FormData(e.target)
  var name = fdata.get("name"),
  email = fdata.get("email"),
  sub = fdata.get("sub"),
  msg = fdata.get("msg")
  // console.log(name,email,sub,msg);
  var requestData = new URLSearchParams({
    name : name,
    email: email,
    message: msg,
    subject: sub,
    sendMsg: true
  })
  // requestData.append('name', name);
  fetch("https://ai.webxspark.com/api/reword-me/contact", {
    method: "POST",
    body: requestData
  })
  .then(rawdata => rawdata.json())
  .then(processData => {
    console.table(processData)
    if(processData.status==200){
      alert(processData.message)
      // /empty the form
      e.target.reset()
    }
    else{
      alert(processData.console.error())
    }
  } )
}
  return (
    <div className="flex justify-center items-center h-screen">
      <div className='bg-white rounded-lg py-16 px-20'>
        <div className="font-semibold text-lg mx-8 mb-8">
          Send Us a Message
        </div>
        <form onSubmit={handleData}>
          <div className="flex flex-col gap-8 mt-10 w-full">
            <input name="name" placeholder="Full name" className="text-[#9c9ba8] text-md focus:outline-none border-b-[1px] p-2" />
            <input name="email" placeholder="Your email" className="text-[#9c9ba8] text-md focus:outline-none border-b-[1px] p-2" />
            <input name="sub" placeholder="Subject" className="text-[#9c9ba8] text-md focus:outline-none border-b-[1px] p-2" />
            <textarea name="msg" className="focus:outline-none border-gray-200 border-[1.5px] rounded-md resize-none p-2" placeholder="Enter your message here..." rows={3}>
            </textarea>
            <button className="text-base font-semibold text-white bg-[#151534] rounded-full py-3 px-20">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
