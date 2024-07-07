const uploadSong = (req, res) => {
    try {
      const file = req.file;
      const songUrl = {
        url: file.path,
      };
  
      return res.status(200).json({
        message: "Song Uploaded",
        image_url: songUrl.url,
      });
    } catch (error) {
      console.error("Error from upload song", error);
      return res.status(500).json({ error: "Error in upload song" });
    }
  };
  
  module.exports = { uploadSong };