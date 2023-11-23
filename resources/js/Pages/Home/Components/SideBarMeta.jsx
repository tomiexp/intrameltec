import { Slider } from '@nextui-org/react'

export default function SidebarMeta ({ kpi }) {
  const { TargetDeltaPct, TargetValue, CurrentValue, Name } = kpi
  const marks = [
    {
      value: 0,
      label: '0%'
    },
    {
      value: parseFloat(TargetValue) * 0.2,
      label: '20%'
    },
    {
      value: parseFloat(TargetValue) / 2,
      label: '50%'
    },
    {
      value: parseFloat(TargetValue) * 0.8,
      label: '80%'
    },
    {
      value: parseFloat(TargetValue),
      label: '100%'
    }
  ]
  const valueMax = parseFloat(TargetValue)

  const valueSlider = (100 + parseFloat(TargetDeltaPct)) / 100
  const colorSlider = (valueSlider * 100) >= 50 ? 'warning' : (valueSlider * 100) >= 80 ? 'success' : 'danger'

  return (
    <Slider isDisabled size='lg' maxValue={valueMax} minValue={0} aria-label='Meta 2023' defaultValue={parseFloat(CurrentValue)} marks={marks} color={colorSlider} label={Name} formatOptions={{ style: 'currency', currency: 'COP', minimumFractionDigits: 0 }} />
  )
}
