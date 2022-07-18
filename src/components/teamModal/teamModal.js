
import closeModalByClick, {closeModalEscKey } from '../movieModal/movieModal';
import '../movieModal/movieModal.scss';
import './teamModal.scss';


const teamLink = document.querySelector('[data-team]')
const closeModalBtn = document.querySelector('[data-team-modal-close]');
const modal = document.querySelector('[data-team-modal]');
const backdrop = document.querySelector('body');

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModalByClick);
teamLink.addEventListener('click', openModal);

function closeModal() {
  modal.classList.add('is-hidden');
  backdrop.removeEventListener('keydown', closeModalEscKey);
};

function openModal() {
  modal.classList.remove('is-hidden');
  backdrop.addEventListener('keydown', closeModalEscKey);
};