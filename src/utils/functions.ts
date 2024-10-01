export const formatDate = (utcTimestamp: number) => {
  const date = new Date(utcTimestamp * 1000);
  const now = new Date();
  const differenceInMs = now.getTime() - date.getTime(); // Difference in milliseconds

  // Convert difference to human-readable format (e.g., seconds, minutes, hours, days ago)
  const seconds = Math.floor(differenceInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day(s) ago`;
  } else if (hours > 0) {
    return `${hours} hour(s) ago`;
  } else if (minutes > 0) {
    return `${minutes} minute(s) ago`;
  } else {
    return `${seconds} second(s) ago`;
  }
};

// Function to unescape HTML entities
export const decodeHtmlEntities = (str: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};
