const body = document.querySelector('body')
const btn = document.querySelector('button')
const swap = document.querySelector('.swap')

btn.onclick = () => {
	body.classList.toggle('dark')
	const currentRotation = parseInt(getComputedStyle(swap).getPropertyValue('--rotation'))
	swap.style.setProperty('--rotation', currentRotation + 180)
}