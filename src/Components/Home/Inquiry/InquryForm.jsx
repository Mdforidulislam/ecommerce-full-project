const InquryForm = () => {
    return (
        <div className="w-full h-full bg-white px-6 py-3 rounded-md">
            <h1 className="text-black   md:text-2xl ">Send quote to suppliers</h1>
            <form action="" className="space-y-2 mt-4">
                <input type="text"  placeholder="what item you need ?" className="block w-full h-full px-6 py-3 rounded-md focus:outline-none border" />
                <textarea className="focus:outline-none border px-2 py-4 w-full h-full rounded-md" name="" id="" cols="20" rows="5" placeholder="Type more details"></textarea>
                <div className="flex gap-6">
                <input type="text" placeholder="Type" className="border px-3 py-3 w-3/4 h-full " />
                <select className="border px-6 py-3 text-sm capitalize" name="" id="">
                    <option value="">pcs</option>
                    <option value="">scs</option>
                    <option value="">ptc</option>
                </select>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md "> Send inquiry</button>
            </form>
        </div>
    );
};

export default InquryForm;