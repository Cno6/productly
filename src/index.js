window.onload = function () {
  addTagsFilterClickHandler();
};

// Tags Filter
const addTagsFilterClickHandler = () => {
  const filterByTags = document.querySelector('.strategies__tags');
  filterByTags.addEventListener('click', selectTag);
};

const selectTag = (e) => {
  if (
    e.target.classList.contains('tag_selected') ||
    !e.target.classList.contains('tag')
  )
    return;

  const clickedTag = e.target;
  removeSelectedTags();
  toggleTagSelect(clickedTag);
  displayFiltredStrategies(clickedTag.innerHTML);
};

const removeSelectedTags = () => {
  const selectedTag = document.querySelector('.tag_selected');

  toggleTagSelect(selectedTag);
};

const toggleTagSelect = (tag) => {
  tag.classList.toggle('tag_selected');
  tag.classList.toggle('tag_bordered');
};

const displayFiltredStrategies = (filter) => {
  const strategyArticles = document.querySelectorAll('.strategy');

  strategyArticles.forEach((article) => {
    const articleTags = article.querySelectorAll('.tag');

    if (filter === 'All') {
      article.classList.remove('hidden');
      return;
    }

    articleTags.forEach((tag) => {
      if (tag.innerHTML === filter) {
        toggleElementVisibility(article);
      }
    });
  });
};

const toggleElementVisibility = function (elem) {
  elem.classList.toggle('hidden');
};
