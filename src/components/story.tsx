function Story({ imgUrl, content }: { imgUrl: string; content: string }) {
  return (
    <div className="flex flex-col justify-between items-center min-w-30 h-full cursor-pointer">
      <div className="p-0.75 rounded-full border-2">
        <img src={imgUrl} alt={content} className="w-20 h-20 rounded-full" />
      </div>

      <p className="h-full text-center mt-3 text-sm text-gray-900">{content}</p>
    </div>
  );
}

export default Story;
