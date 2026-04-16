import React, { useState, useEffect } from 'react';
import { Star, StarHalf, Heart, Eye, Minus, Plus, ArrowLeftRight, MessageCircleQuestion, Share2, Truck, CreditCard } from 'lucide-react';
import './Index.css';

import ShopNavbar from "@/components/ShopPage/ShopNavbar";
import PeakyBlinders from "@/components/peakyBlinders/PeakyBlinders";
import ValueBar from "@/components/peakyBlinders/ValueBar";
import SocialGallery from "@/components/socialGallery/SocialGallery";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

interface ProductImage {
    id: number;
    url: string;
    alt: string;
}

interface Size {
    value: string;
    label: string;
}

interface Color {
    name: string;
    value: string;
    class: string;
}

const ProductPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Blue');
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 5,
        seconds: 59,
        milliseconds: 47
    });

    // Product images
    const productImages: ProductImage[] = [
        { id: 1, url: '/api/placeholder/100/100', alt: 'Purple jacket' },
        { id: 2, url: '/api/placeholder/100/100', alt: 'Red jacket' },
        { id: 3, url: '/api/placeholder/100/100', alt: 'Blue jacket back' },
        { id: 4, url: '/api/placeholder/100/100', alt: 'Navy jacket' },
        { id: 5, url: '/api/placeholder/100/100', alt: 'Dark blue jacket' },
        { id: 6, url: '/api/placeholder/100/100', alt: 'Black jacket' },
        { id: 7, url: '/api/placeholder/100/100', alt: 'Brown jacket' },
    ];

    const sizes: Size[] = [
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: 'XXL', label: 'XXL' },
    ];

    const colors: Color[] = [
        { name: 'Blue', value: 'blue', class: 'bg-blue-400' },
        { name: 'Black', value: 'black', class: 'bg-black' },
        { name: 'Pink', value: 'pink', class: 'bg-pink-200' },
    ];

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds, milliseconds } = prev;

                if (milliseconds > 0) {
                    milliseconds--;
                } else {
                    milliseconds = 99;
                    if (seconds > 0) {
                        seconds--;
                    } else {
                        seconds = 59;
                        if (minutes > 0) {
                            minutes--;
                        } else {
                            minutes = 59;
                            if (hours > 0) {
                                hours--;
                            }
                        }
                    }
                }

                return { hours, minutes, seconds, milliseconds };
            });
        }, 10);

        return () => clearInterval(timer);
    }, []);

    const handleQuantityChange = (value: number) => {
        if (value >= 1 && value <= 9) {
            setQuantity(value);
        }
    };

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Star key={`full-${i}`} className="w-4 h-4 fill-amber-400 text-amber-400" />
            );
        }

        if (hasHalfStar) {
            stars.push(
                <StarHalf key="half" className="w-4 h-4 fill-amber-400 text-amber-400" />
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
            );
        }

        return stars;
    };

    return (
        <main className="min-h-screen bg-[#FFFFFF] pb-20">
            <ShopNavbar />
            <div className="pt-8">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Section - Image Gallery */}
                        <div className="lg:col-span-1">
                            <div className="flex flex-col gap-3">
                                {productImages.map((img, index) => (
                                    <button
                                        key={img.id}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-20 h-20 border-2 rounded-lg overflow-hidden transition-all ${selectedImage === index
                                                ? 'border-gray-800'
                                                : 'border-gray-200 hover:border-gray-400'
                                            }`}
                                    >
                                        <img
                                            src={img.url}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Center Section - Main Image */}
                        <div className="lg:col-span-6">
                            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/5]">
                                <img
                                    src="/api/placeholder/600/750"
                                    alt="Main product"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Section - Product Details */}
                        <div className="lg:col-span-5">
                            <div className="space-y-6">
                                {/* Header */}
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">FASCO</p>
                                    <div className="flex items-start justify-between mb-3">
                                        <h1 className="text-3xl font-bold text-gray-900">Denim Jacket</h1>
                                        <button
                                            onClick={() => setIsFavorite(!isFavorite)}
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <Heart
                                                className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center">
                                            {renderStars(3)}
                                        </div>
                                        <span className="text-sm text-gray-600">(3)</span>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-bold text-gray-900">$39.00</span>
                                    <span className="text-xl text-gray-400 line-through">$59.00</span>
                                    <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
                                        SAVE 33%
                                    </span>
                                </div>

                                {/* Viewing Count */}
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Eye className="w-4 h-4" />
                                    <span>24 people are viewing this right now</span>
                                </div>

                                {/* Countdown Timer */}
                                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-red-600 font-medium">Hurry up! Sale ends in:</span>
                                        <div className="flex items-center gap-2 text-red-600 font-mono font-bold">
                                            <span className="bg-white px-2 py-1 rounded">
                                                {String(timeLeft.hours).padStart(2, '0')}
                                            </span>
                                            <span>:</span>
                                            <span className="bg-white px-2 py-1 rounded">
                                                {String(timeLeft.minutes).padStart(2, '0')}
                                            </span>
                                            <span>:</span>
                                            <span className="bg-white px-2 py-1 rounded">
                                                {String(timeLeft.seconds).padStart(2, '0')}
                                            </span>
                                            <span>:</span>
                                            <span className="bg-white px-2 py-1 rounded">
                                                {String(timeLeft.milliseconds).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stock Indicator */}
                                <div>
                                    <p className="text-sm font-medium text-gray-900 mb-2">
                                        Only <span className="text-red-600">9</span> item(s) left in stock!
                                    </p>
                                    <div className="w-full bg-gray-200 rounded-full h-1">
                                        <div className="bg-red-600 h-1 rounded-full" style={{ width: '30%' }}></div>
                                    </div>
                                </div>

                                {/* Size Selection */}
                                <div>
                                    <p className="text-sm font-medium text-gray-900 mb-3">
                                        Size: <span className="font-bold">{selectedSize}</span>
                                    </p>
                                    <div className="flex gap-2">
                                        {sizes.map((size) => (
                                            <button
                                                key={size.value}
                                                onClick={() => setSelectedSize(size.value)}
                                                className={`px-6 py-2 border rounded-lg font-medium transition-all ${selectedSize === size.value
                                                        ? 'bg-black text-white border-black'
                                                        : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
                                                    }`}
                                            >
                                                {size.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Color Selection */}
                                <div>
                                    <p className="text-sm font-medium text-gray-900 mb-3">
                                        Color: <span className="font-bold">{selectedColor}</span>
                                    </p>
                                    <div className="flex gap-3">
                                        {colors.map((color) => (
                                            <button
                                                key={color.value}
                                                onClick={() => setSelectedColor(color.name)}
                                                className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.name
                                                        ? 'border-gray-900 ring-2 ring-gray-300 ring-offset-2'
                                                        : 'border-gray-300'
                                                    }`}
                                            >
                                                <div className={`w-full h-full rounded-full ${color.class}`}></div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity and Add to Cart */}
                                <div className="space-y-4">
                                    <p className="text-sm font-medium text-gray-900">Quantity</p>
                                    <div className="flex gap-4">
                                        <div className="flex items-center border border-gray-300 rounded-lg">
                                            <button
                                                onClick={() => handleQuantityChange(quantity - 1)}
                                                className="p-3 hover:bg-gray-100 transition-colors"
                                                disabled={quantity <= 1}
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <input
                                                type="number"
                                                value={quantity}
                                                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                                                className="w-16 text-center border-x border-gray-300 focus:outline-none"
                                                min="1"
                                                max="9"
                                            />
                                            <button
                                                onClick={() => handleQuantityChange(quantity + 1)}
                                                className="p-3 hover:bg-gray-100 transition-colors"
                                                disabled={quantity >= 9}
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <button className="flex-1 bg-white border-2 border-black text-black font-semibold py-3 px-6 rounded-lg hover:bg-black hover:text-white transition-all">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                                    <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
                                        <ArrowLeftRight className="w-4 h-4" />
                                        Compare
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
                                        <MessageCircleQuestion className="w-4 h-4" />
                                        Ask a question
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
                                        <Share2 className="w-4 h-4" />
                                        Share
                                    </button>
                                </div>

                                {/* Delivery & Shipping Info */}
                                <div className="space-y-3 pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Truck className="w-5 h-5 text-gray-600" />
                                        <div>
                                            <span className="font-medium text-gray-900">Estimated Delivery:</span>
                                            <span className="text-gray-600 ml-1">Jul 30 - Aug 03</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <CreditCard className="w-5 h-5 text-gray-600" />
                                        <div>
                                            <span className="font-medium text-gray-900">Free Shipping & Returns:</span>
                                            <span className="text-gray-600 ml-1">On all orders over $75</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Methods */}
                                <div className="pt-4">
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <img src="/api/placeholder/40/25" alt="Visa" className="h-6" />
                                        <img src="/api/placeholder/40/25" alt="Mastercard" className="h-6" />
                                        <img src="/api/placeholder/40/25" alt="Amex" className="h-6" />
                                        <img src="/api/placeholder/40/25" alt="JCB" className="h-6" />
                                        <img src="/api/placeholder/40/25" alt="Discover" className="h-6" />
                                        <img src="/api/placeholder/40/25" alt="Diners" className="h-6" />
                                        <img src="/api/placeholder/40/25" alt="Union Pay" className="h-6" />
                                    </div>
                                    <p className="text-center text-sm font-medium text-gray-700">
                                        Guarantee safe & secure checkout
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PeakyBlinders />
            <ValueBar />
            <SocialGallery />
            <NewsLetter />
            <Footer />
        </main>
    );
};

export default ProductPage;