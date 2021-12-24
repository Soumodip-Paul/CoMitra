export const setTitle = title => {
    document.title = title;
}
export const setDescription = _desc => {
    document.querySelector('meta[name="description"]').setAttribute("content", _desc);
}