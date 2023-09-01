export const calculateTotal = ({ selectedValues, partsPrice }) => {
  const cpuTotal = parseFloat(selectedValues.cpuCores * partsPrice.cpuPart) ? parseFloat(selectedValues.cpuCores * partsPrice.cpuPart) : 0
  const ramTotal = parseFloat(selectedValues.ram * partsPrice.ramPart) ? parseFloat(selectedValues.ram * partsPrice.ramPart) : 0
  const ddTotal = parseFloat(selectedValues.storage * partsPrice.storagePart) ? parseFloat(selectedValues.storage * partsPrice.storagePart) : 0
  const brandTotal = parseFloat(selectedValues.bandwidth * partsPrice.brandwichPart) ? parseFloat(selectedValues.bandwidth * partsPrice.brandwichPart) : 0
  const sql2extra = parseFloat(selectedValues.sql2extra * partsPrice.sql2extra) ? parseFloat(selectedValues.sql2extra * partsPrice.sql2extra) : 0
  const soTotal = parseFloat(selectedValues.so) ? parseFloat(selectedValues.so) : 0
  const backup = parseFloat(partsPrice.backup)
  const security = parseFloat(partsPrice.security)
  const support = parseFloat(partsPrice.support)
  const snapchot = parseFloat(partsPrice.snapchot)
  const sql2core = parseFloat(selectedValues.sql2core) ? parseFloat(selectedValues.sql2core) : 0
  const rdp = parseFloat(selectedValues.rdp) ? parseFloat(selectedValues.rdp) : 0
  const ip = parseFloat(selectedValues.ip) ? parseFloat(selectedValues.ip) : 0

  const totalPrice = cpuTotal + ramTotal + ddTotal + brandTotal + soTotal + backup + security + support + snapchot + sql2core + rdp + ip + sql2extra

  return totalPrice
}
