let fill = document.querySelector('.fill')
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

let empties = document.querySelectorAll(".empty")
for (const empty of empties) {
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', drop)
}

let bins = document.querySelector('.bins')
  bins.addEventListener('dragenter', dragEnterBin)
  bins.addEventListener('dragover', dragOver)
  bins.addEventListener('dragleave', dragLeaveBin)
  bins.addEventListener('drop', dropBin)

let modal = document.querySelector('.modal')
let modal_content = document.querySelector('.modal-content')
let deleteThisPic = document.querySelector('.delete')
let cancelDelete = document.querySelector('.cancel')

deleteThisPic.addEventListener('click', deletePic)
cancelDelete.addEventListener('click', cancel)


function dragStart(){
  this.className += ' hold'

  setTimeout(() => {
    this.className = 'none'
  }, 0);
}

function dragEnd(){
  this.className = 'fill'

}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}

function dragOver(e) {
  e.preventDefault()
}

function dragLeave() {
  this.className = 'empty'
}

function drop() {
  this.className = 'empty'
  this.appendChild(fill)
}

function dragEnterBin() {
  this.className += ' hoveredBin'
  this.appendChild(fill)
}

function dragLeaveBin() {
  this.className = 'bins'
}

function dropBin() {
  modal.style.display = 'block'
  modal_content.appendChild(fill)
  this.className = 'bins'
  
}

function cancel() {
  modal.style.display = 'none'
  empties[0].appendChild(fill)
}

function deletePic(){
  modal.style.display = 'none'
  modal_content.removeChild(fill)
}
