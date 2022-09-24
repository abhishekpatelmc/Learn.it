class FileDownloader {
  constructor(downloader) {
    this.downloader = downloader;
  }
  async downloadFile(url, filePath) {
    return this.downloader(url, filePath);
  }
}

exports.FileDownloader = FileDownloader;
