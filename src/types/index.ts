interface PaginatedResponseType {
  limit: number;
  nextPage: boolean;
  page: number;
  perviousPage: boolean;
  total: number;
}

export interface ProductType {
  offPercent: number;
  price: number;
  ratedBy: number;
  ratings: number;
  slug: string;
  strikePrice: number;
  title: string;
  totalRatings: number;
  variantType: string;
  wished: boolean;
  _id: string;
  images: string[];
  brand: { name: string; slug: string; _id: string };
}

export interface ProductListResponseType {
  data: {
    docs: ProductType[];
    pagination: PaginatedResponseType;
  };
  message: string;
}

export interface ProductDetailType {
  slug: string;
  strikePrice: number;
  title: string;
  totalRatings: number;
  updatedAt: string;
  variantType: string;
  wished: boolean;
  __v: number;
  _id: string;
  ingredient: string;
  isDeleted: boolean;
  isFeatured: boolean;
  isOnSale: boolean;
  isPublished: boolean;
  maxOrder: number;
  metaRobots: string;
  minOrder: number;
  offPercent: number;
  price: number;
  ratedBy: number;
  ratings: number | undefined;
  brand: { name: string; slug: string; _id: string };
  breadCrumbs: { name: string; slug: string; _id: string }[];
  category: {
    level: number;
    metaDescription: string;
    metaRobots: string;
    metaTitle: string;
    parentId: string;
    slug: string;
    socialImage: string;
    title: string;
    _id: string;
  };
  colorAttributes: {
    colorValue: string;
    name: string;
    _id: string;
  }[];
  colorVariants: {
    color: {
      colorValue: string;
      name: string;
      _id: string;
    };
    maxOrder: number;
    minOrder: number;
    offPercent: number;
    price: number;
    rewardPoint: number;
    status: boolean;
    stockAlertOn: number;
    strikePrice: number;
    totalStock: number;
    unitWeight: number;
    _id: string;
  }[];
  createdAt: string;
  description: string;
  images: string[];
  filterOptions: {
    age_12: boolean;
    age_20: boolean;
    age_30: boolean;
    age_40: boolean;
    age_50: boolean;
    benefits_anti_ageing: boolean;
    benefits_anti_shine: boolean;
    benefits_brightning: boolean;
    benefits_bronzing: boolean;
    benefits_concealing: boolean;
    benefits_conditioning: boolean;
    benefits_cooling: boolean;
    benefits_curling: boolean;
    benefits_defining: boolean;
    benefits_energising: boolean;
    benefits_even_skin_tone: boolean;
    benefits_exfoliating: boolean;
    benefits_filling: boolean;
    benefits_growth_boosting: boolean;
    benefits_hydrating: boolean;
    benefits_lengthening: boolean;
    benefits_long_lasting: boolean;
    benefits_mattifing: boolean;
    benefits_moisturing: boolean;
    benefits_nourishing: boolean;
    benefits_protecting: boolean;
    benefits_quick_dry: boolean;
    benefits_revitalising: boolean;
    benefits_sculpting: boolean;
    benefits_smoothing: boolean;
    benefits_thickening: boolean;
    benefits_transfer_proof: boolean;
    benefits_volumising: boolean;
    benefits_waterproof: boolean;
    color_black: boolean;
    color_black_hex: string;
    color_blue: boolean;
    color_blue_hex: string;
    color_brown: boolean;
    color_brown_hex: string;
    color_burgundy: boolean;
    color_burgundy_hex: string;
    color_green: boolean;
    color_green_hex: string;
    color_grey: boolean;
    color_grey_hex: string;
    color_pink: boolean;
    color_pink_hex: string;
    color_purple: boolean;
    color_purple_hex: string;
    color_red: boolean;
    color_red_hex: string;
    coverage_high: boolean;
    coverage_light: boolean;
    coverage_medium: boolean;
    finish_creamy: boolean;
    finish_glossy: boolean;
    finish_luminious: boolean;
    finish_malte: boolean;
    finish_metaallic: boolean;
    finish_natural: boolean;
    finish_satin: boolean;
    finish_sheer: boolean;
    finish_shimmer: boolean;
    finish_shine: boolean;
    formulation_cream: boolean;
    formulation_gel: boolean;
    formulation_lip_balm: boolean;
    formulation_liquid: boolean;
    formulation_loose: boolean;
    formulation_pearls: boolean;
    formulation_pencil: boolean;
    formulation_powder: boolean;
    formulation_pressed: boolean;
    formulation_serum: boolean;
    formulation_stick: boolean;
    formulation_wax: boolean;
    skin_type_ageing: boolean;
    skin_type_breakout_prone: boolean;
    skin_type_combination: boolean;
    skin_type_dry: boolean;
    skin_type_normal: boolean;
    skin_type_oily: boolean;
    skin_type_sensitive: boolean;
  };
  imagesAlt: string[];
  sizeVariants: {
    expiresAt: string;
    maxOrder: number;
    minOrder: number;
    offPercent: number;
    price: number;
    rewardPoint: number;
    status: boolean;
    stockAlertOn: number;
    strikePrice: number;
    totalStock: number;
    unitWeight: number;
    variantName: string;
    _id: string;
  }[];
  sizeAttributes: [];
}

export interface ProductDetailResponseType {
  data: ProductDetailType;
  message: string;
}
