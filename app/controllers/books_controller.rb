class BooksController < ApplicationController
    before_action :set_book, only:[:show, :update, :destroy]

    def app
        render component: "App"
    end

    def index
        @books = Book.order(:name)
        render json: @books
    end

    def create
        @book = Book.new(book_params)
        if(@book.save)
            render json: @book
        else
            render json: {errors: @book.errors}, status: :unprocessable_entity
        end

    end

    def update
        @book = Book.find(params[:id])
        if(@book.update(book_params))
            render json: @book
        else
            render json: @book.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        Book.find(params[:id]).destroy
    end

    private
    
    def book_params
        params.require(:book).permit(:name, :author)
    end

    def set_book
        @book = Book.find(params[:id])
    end

    

end
