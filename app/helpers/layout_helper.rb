module LayoutHelper

  def title(page_title, show_title = true, show_header = false)
    content_for(:title) { page_title.to_s }
    @show_title = show_title
    @show_header = show_header
  end

  def show_title?
    @show_title
  end

  def show_header?
    @show_header
  end

end
