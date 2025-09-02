import { motion } from "framer-motion";
const TableLoader = () => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="w-full h-10 bg-gray-200 rounded-md animate-pulse" />
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </th>
                <th className="text-left p-4 hidden md:table-cell">
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                </th>
                <th className="text-left p-4 hidden lg:table-cell">
                  <div className="h-4 w-14 bg-gray-200 rounded animate-pulse" />
                </th>
                <th className="text-left p-4 hidden lg:table-cell">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </th>
                <th className="text-center p-4">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mx-auto" />
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <td className="p-4">
                    <div className="space-y-2">
                      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                      <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                      <div className="md:hidden space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-gray-200 rounded animate-pulse" />
                          <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-gray-200 rounded animate-pulse" />
                          <div className="h-3 w-28 bg-gray-200 rounded animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </td>
                  <td className="p-4 hidden lg:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </td>
                  <td className="p-4 hidden lg:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-md">
                      <div className="h-4 w-4 bg-gray-200 rounded animate-pulse mr-2" />
                      <div className="h-4 w-8 bg-gray-200 rounded animate-pulse hidden sm:block" />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
        <div className="flex items-center justify-center gap-2">
          <div className="h-9 w-20 bg-gray-200 rounded-md animate-pulse" />
          <div className="flex items-center gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-10 w-10 bg-gray-200 rounded-md animate-pulse"
              />
            ))}
          </div>
          <div className="h-9 w-16 bg-gray-200 rounded-md animate-pulse" />
        </div>
        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
      </div>
    </motion.div>
  );
};

export default TableLoader;
