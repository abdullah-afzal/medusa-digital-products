const handleDownload = async (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  mediaId: string
) => {
  e.preventDefault();

  const url = await getDigitalMediaDownloadLink(mediaId);

  window.open(url);
  return (
    <a href="#" onClick={(e) => handleDownload(e, media.id)}>
      Download{showMediaCount ? ` ${index + 1}` : ``}
    </a>
  );
};
