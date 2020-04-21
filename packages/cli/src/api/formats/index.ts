import { CatalogFormat } from "@lingui/conf"

import lingui from "./lingui"
import minimal from "./minimal"
import po from "./po"
import { CatalogFormatter } from "./types"

export { CatalogFormatter }

const formats: Record<CatalogFormat, CatalogFormatter> = { lingui, minimal, po }

export default function getFormat(name: CatalogFormat): CatalogFormatter {
  const format = formats[name]

  if (!format) {
    throw new Error(
      `Unknown format "${name}". Use one of following: ${Object.keys(
        formats
      ).join(", ")}`
    )
  }

  return format
}
