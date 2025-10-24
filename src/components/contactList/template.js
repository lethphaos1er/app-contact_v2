export default function getTemplate(){
  return `
    <div class="layout w-full bg-white rounded-lg shadow-lg flex flex-wrap flex-row-reverse overflow-hidden">
      <!-- On laisse la SECTION d'abord ; l'ASIDE sera APPEND ensuite -->
      <section class="w-2/3 p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold mb-4">Contacts List</h2>
          <p class="text-gray-600 mb-4">Contacts Count : <span class="font-bold contact-count"></span></p>
        </div>

        <div class="mb-4">
          <input
            type="text"
            class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search a contact"
          />
        </div>

        <table class="table-auto w-full contacts-table border-collapse table-fixed">
          <thead>
            <tr class="bg-gray-200">
              <th class="text-left p-4 rounded-tl-lg text-gray-700"><a href="#">Firstname</a></th>
              <th class="text-left p-4 text-gray-700"><a href="#">Lastname</a></th>
              <th class="text-left p-4 text-gray-700"><a href="#">Email</a></th>
              <th class="text-right p-4 rounded-tr-lg text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody class="tr"></tbody>
        </table>
      </section>
      <!-- L’ASIDE sera APPEND ici (après), mais s’affichera à gauche grâce à flex-row-reverse -->
    </div>

    <footer class="w-full bg-gray-500 text-white text-xs p-2">
      &copy; EAFC 2025 Contacts App. All rights reserved.
    </footer>
  `;
}
