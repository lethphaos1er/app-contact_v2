export default function getAddContactTemplate(){
    return `<aside class="w-1/3 bg-gray-200 p-6 pb-12">
        <h2 class="text-xl font-bold mb-4">Add a Contact</h2>
        <div class="mb-4">
          <label class="block text-gray-700">Firstname</label>
          <input name="firstname"
            type="text"
            class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Alex"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Lastname</label>
          <input name= "lastname"
            type="text"
            class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Doe"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input name="email"
            type="email"
            class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="alex.doe@gmail.com"
          />
        </div>
        <button
          class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md new-contact"
        >
          Add
        </button>
      </aside>`
}