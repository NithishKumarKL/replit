// Tata Group Stock Tracker - Standalone JavaScript
class StockTracker {
    constructor() {
        this.companies = [];
        this.filteredCompanies = [];
        this.lastUpdated = new Date();
        
        // Initialize the application
        this.init();
    }

    init() {
        this.loadSampleData();
        this.renderCompanies();
        this.updateDashboardStats();
        this.updateLastUpdated();
        this.setupEventListeners();
        this.startAutoRefresh();
    }

    loadSampleData() {
        // Sample Tata Group companies data with realistic stock prices and financial metrics
        this.companies = [
            {
                symbol: "TCS",
                name: "Tata Consultancy Services",
                exchange: "NSE",
                currency: "INR",
                sector: "IT Services",
                stockPrice: {
                    price: "3245.75",
                    change: "42.50",
                    change_percent: "1.33",
                    volume: "1245000",
                    market_cap: "1175000"
                },
                financialMetrics: {
                    quarterly_profit: "12500",
                    pb_ratio: "12.45",
                    pe_ratio: "28.50",
                    dividend_yield: "1.85"
                }
            },
            {
                symbol: "TATAMOTORS",
                name: "Tata Motors",
                exchange: "NSE",
                currency: "INR",
                sector: "Automotive",
                stockPrice: {
                    price: "875.20",
                    change: "-15.80",
                    change_percent: "-1.77",
                    volume: "2150000",
                    market_cap: "320000"
                },
                financialMetrics: {
                    quarterly_profit: "3200",
                    pb_ratio: "1.85",
                    pe_ratio: "15.30",
                    dividend_yield: "2.45"
                }
            },
            {
                symbol: "TATASTEEL",
                name: "Tata Steel",
                exchange: "NSE",
                currency: "INR",
                sector: "Steel",
                stockPrice: {
                    price: "142.35",
                    change: "3.25",
                    change_percent: "2.34",
                    volume: "5200000",
                    market_cap: "175000"
                },
                financialMetrics: {
                    quarterly_profit: "2800",
                    pb_ratio: "0.95",
                    pe_ratio: "12.20",
                    dividend_yield: "3.20"
                }
            },
            {
                symbol: "TITAN",
                name: "Titan Company",
                exchange: "NSE",
                currency: "INR",
                sector: "Consumer Goods",
                stockPrice: {
                    price: "3156.90",
                    change: "78.45",
                    change_percent: "2.55",
                    volume: "875000",
                    market_cap: "280000"
                },
                financialMetrics: {
                    quarterly_profit: "850",
                    pb_ratio: "18.60",
                    pe_ratio: "45.80",
                    dividend_yield: "1.20"
                }
            },
            {
                symbol: "TATACHEM",
                name: "Tata Chemicals",
                exchange: "NSE",
                currency: "INR",
                sector: "Chemicals",
                stockPrice: {
                    price: "1024.60",
                    change: "-8.90",
                    change_percent: "-0.86",
                    volume: "420000",
                    market_cap: "26000"
                },
                financialMetrics: {
                    quarterly_profit: "420",
                    pb_ratio: "2.40",
                    pe_ratio: "18.75",
                    dividend_yield: "2.80"
                }
            },
            {
                symbol: "TATAPOWER",
                name: "Tata Power",
                exchange: "NSE",
                currency: "INR",
                sector: "Power",
                stockPrice: {
                    price: "412.15",
                    change: "12.30",
                    change_percent: "3.08",
                    volume: "1850000",
                    market_cap: "130000"
                },
                financialMetrics: {
                    quarterly_profit: "1250",
                    pb_ratio: "1.65",
                    pe_ratio: "22.40",
                    dividend_yield: "3.50"
                }
            },
            {
                symbol: "INDHOTEL",
                name: "Indian Hotels Company",
                exchange: "NSE",
                currency: "INR",
                sector: "Hotels",
                stockPrice: {
                    price: "785.40",
                    change: "21.75",
                    change_percent: "2.85",
                    volume: "650000",
                    market_cap: "110000"
                },
                financialMetrics: {
                    quarterly_profit: "680",
                    pb_ratio: "4.25",
                    pe_ratio: "35.60",
                    dividend_yield: "1.50"
                }
            },
            {
                symbol: "TATACONSUM",
                name: "Tata Consumer Products",
                exchange: "NSE",
                currency: "INR",
                sector: "FMCG",
                stockPrice: {
                    price: "912.80",
                    change: "-5.20",
                    change_percent: "-0.57",
                    volume: "380000",
                    market_cap: "85000"
                },
                financialMetrics: {
                    quarterly_profit: "520",
                    pb_ratio: "6.80",
                    pe_ratio: "32.40",
                    dividend_yield: "2.10"
                }
            },
            {
                symbol: "TATACOMM",
                name: "Tata Communications",
                exchange: "NSE",
                currency: "INR",
                sector: "Telecom",
                stockPrice: {
                    price: "1645.25",
                    change: "35.60",
                    change_percent: "2.21",
                    volume: "125000",
                    market_cap: "48000"
                },
                financialMetrics: {
                    quarterly_profit: "180",
                    pb_ratio: "2.15",
                    pe_ratio: "16.80",
                    dividend_yield: "2.95"
                }
            },
            {
                symbol: "VOLTAS",
                name: "Voltas",
                exchange: "NSE",
                currency: "INR",
                sector: "Consumer Durables",
                stockPrice: {
                    price: "1687.30",
                    change: "-22.45",
                    change_percent: "-1.31",
                    volume: "195000",
                    market_cap: "56000"
                },
                financialMetrics: {
                    quarterly_profit: "320",
                    pb_ratio: "3.45",
                    pe_ratio: "25.60",
                    dividend_yield: "1.75"
                }
            },
            {
                symbol: "TRENT",
                name: "Trent",
                exchange: "NSE",
                currency: "INR",
                sector: "Retail",
                stockPrice: {
                    price: "6789.15",
                    change: "145.20",
                    change_percent: "2.19",
                    volume: "85000",
                    market_cap: "240000"
                },
                financialMetrics: {
                    quarterly_profit: "450",
                    pb_ratio: "15.20",
                    pe_ratio: "78.50",
                    dividend_yield: "0.85"
                }
            },
            {
                symbol: "TATAINVEST",
                name: "Tata Investment Corporation",
                exchange: "NSE",
                currency: "INR",
                sector: "Investment",
                stockPrice: {
                    price: "4256.80",
                    change: "68.90",
                    change_percent: "1.65",
                    volume: "12000",
                    market_cap: "12000"
                },
                financialMetrics: {
                    quarterly_profit: "85",
                    pb_ratio: "0.75",
                    pe_ratio: "8.90",
                    dividend_yield: "4.20"
                }
            },
            {
                symbol: "TATAELXSI",
                name: "Tata Elxsi",
                exchange: "NSE",
                currency: "INR",
                sector: "IT Services",
                stockPrice: {
                    price: "7852.35",
                    change: "189.25",
                    change_percent: "2.47",
                    volume: "45000",
                    market_cap: "85000"
                },
                financialMetrics: {
                    quarterly_profit: "125",
                    pb_ratio: "8.95",
                    pe_ratio: "42.30",
                    dividend_yield: "1.65"
                }
            },
            {
                symbol: "NELCO",
                name: "Nelco",
                exchange: "NSE",
                currency: "INR",
                sector: "Telecom Equipment",
                stockPrice: {
                    price: "1234.50",
                    change: "-45.30",
                    change_percent: "-3.54",
                    volume: "25000",
                    market_cap: "8500"
                },
                financialMetrics: {
                    quarterly_profit: "25",
                    pb_ratio: "1.20",
                    pe_ratio: "18.50",
                    dividend_yield: "2.40"
                }
            },
            {
                symbol: "TATAMETALI",
                name: "Tata Metaliks",
                exchange: "NSE",
                currency: "INR",
                sector: "Steel",
                stockPrice: {
                    price: "178.90",
                    change: "4.85",
                    change_percent: "2.79",
                    volume: "145000",
                    market_cap: "3200"
                },
                financialMetrics: {
                    quarterly_profit: "45",
                    pb_ratio: "0.85",
                    pe_ratio: "11.20",
                    dividend_yield: "3.80"
                }
            },
            {
                symbol: "TATASTLLP",
                name: "Tata Steel Long Products",
                exchange: "NSE",
                currency: "INR",
                sector: "Steel",
                stockPrice: {
                    price: "892.45",
                    change: "-12.60",
                    change_percent: "-1.39",
                    volume: "95000",
                    market_cap: "15000"
                },
                financialMetrics: {
                    quarterly_profit: "95",
                    pb_ratio: "1.15",
                    pe_ratio: "14.60",
                    dividend_yield: "2.65"
                }
            },
            {
                symbol: "TATACOFFEE",
                name: "Tata Coffee",
                exchange: "NSE",
                currency: "INR",
                sector: "Food Products",
                stockPrice: {
                    price: "267.80",
                    change: "6.45",
                    change_percent: "2.47",
                    volume: "75000",
                    market_cap: "3800"
                },
                financialMetrics: {
                    quarterly_profit: "38",
                    pb_ratio: "2.80",
                    pe_ratio: "21.40",
                    dividend_yield: "3.15"
                }
            },
            {
                symbol: "TEJASNET",
                name: "Tejas Networks",
                exchange: "NSE",
                currency: "INR",
                sector: "Telecom Equipment",
                stockPrice: {
                    price: "1156.20",
                    change: "28.95",
                    change_percent: "2.57",
                    volume: "165000",
                    market_cap: "18500"
                },
                financialMetrics: {
                    quarterly_profit: "72",
                    pb_ratio: "4.50",
                    pe_ratio: "28.90",
                    dividend_yield: "1.85"
                }
            },
            {
                symbol: "TTML",
                name: "Tata Teleservices (Maharashtra)",
                exchange: "NSE",
                currency: "INR",
                sector: "Telecom",
                stockPrice: {
                    price: "89.25",
                    change: "-2.15",
                    change_percent: "-2.35",
                    volume: "285000",
                    market_cap: "2400"
                },
                financialMetrics: {
                    quarterly_profit: "15",
                    pb_ratio: "0.65",
                    pe_ratio: "9.80",
                    dividend_yield: "0.00"
                }
            },
            {
                symbol: "TATATECH",
                name: "Tata Technologies",
                exchange: "NSE",
                currency: "INR",
                sector: "IT Services",
                stockPrice: {
                    price: "945.60",
                    change: "18.75",
                    change_percent: "2.02",
                    volume: "125000",
                    market_cap: "38000"
                },
                financialMetrics: {
                    quarterly_profit: "125",
                    pb_ratio: "5.20",
                    pe_ratio: "24.70",
                    dividend_yield: "1.95"
                }
            }
        ];

        this.filteredCompanies = [...this.companies];
    }

    setupEventListeners() {
        // Refresh button
        document.getElementById('refreshBtn').addEventListener('click', () => {
            this.refreshData();
        });

        // Search input
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterCompanies(e.target.value, document.getElementById('exchangeFilter').value);
        });

        // Exchange filter
        document.getElementById('exchangeFilter').addEventListener('change', (e) => {
            this.filterCompanies(document.getElementById('searchInput').value, e.target.value);
        });
    }

    filterCompanies(searchTerm, exchangeFilter) {
        this.filteredCompanies = this.companies.filter(company => {
            const matchesSearch = !searchTerm || 
                company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                company.symbol.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesExchange = !exchangeFilter || company.exchange === exchangeFilter;
            
            return matchesSearch && matchesExchange;
        });

        this.renderCompanies();
    }

    renderCompanies() {
        const grid = document.getElementById('companiesGrid');
        
        if (this.filteredCompanies.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; color: white; padding: 40px;">No companies found matching your criteria.</div>';
            return;
        }

        grid.innerHTML = this.filteredCompanies.map(company => this.createCompanyCard(company)).join('');
    }

    createCompanyCard(company) {
        const { stockPrice, financialMetrics } = company;
        const changeClass = parseFloat(stockPrice.change_percent) > 0 ? 'positive' : 
                           parseFloat(stockPrice.change_percent) < 0 ? 'negative' : 'neutral';

        return `
            <div class="company-card">
                <div class="company-header">
                    <div class="company-info">
                        <h3>${company.name}</h3>
                        <div class="company-symbol">${company.symbol}</div>
                        <span class="company-exchange">${company.exchange}</span>
                    </div>
                    <div class="stock-price">
                        <div class="price-main">₹${this.formatNumber(stockPrice.price)}</div>
                        <div class="price-change ${changeClass}">
                            ${parseFloat(stockPrice.change) >= 0 ? '+' : ''}${stockPrice.change} (${stockPrice.change_percent}%)
                        </div>
                    </div>
                </div>

                <div class="stock-details">
                    <div class="detail-item">
                        <div class="detail-label">Volume</div>
                        <div class="detail-value">${this.formatVolume(stockPrice.volume)}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Market Cap</div>
                        <div class="detail-value">₹${this.formatMarketCap(stockPrice.market_cap)}</div>
                    </div>
                </div>

                <div class="financial-metrics">
                    <div class="metrics-title">Financial Metrics</div>
                    <div class="metrics-grid">
                        <div class="metric-item">
                            <span class="metric-label">P/E Ratio</span>
                            <span class="metric-value">${financialMetrics.pe_ratio}</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-label">P/B Ratio</span>
                            <span class="metric-value">${financialMetrics.pb_ratio}</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-label">Dividend Yield</span>
                            <span class="metric-value">${financialMetrics.dividend_yield}%</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-label">Quarterly Profit</span>
                            <span class="metric-value">₹${this.formatNumber(financialMetrics.quarterly_profit)} Cr</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    updateDashboardStats() {
        const totalMarketCap = this.companies.reduce((sum, company) => 
            sum + parseFloat(company.stockPrice.market_cap), 0
        );

        const gainers = this.companies.filter(company => 
            parseFloat(company.stockPrice.change_percent) > 0
        ).length;

        const losers = this.companies.filter(company => 
            parseFloat(company.stockPrice.change_percent) < 0
        ).length;

        document.getElementById('totalCompanies').textContent = this.companies.length;
        document.getElementById('totalMarketCap').textContent = `₹${this.formatMarketCap(totalMarketCap.toString())}`;
        document.getElementById('gainers').textContent = gainers;
        document.getElementById('losers').textContent = losers;
    }

    updateLastUpdated() {
        const timeString = this.lastUpdated.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        document.getElementById('lastUpdatedTime').textContent = timeString;
    }

    refreshData() {
        // Show loading state
        const refreshBtn = document.getElementById('refreshBtn');
        const originalText = refreshBtn.innerHTML;
        refreshBtn.innerHTML = '<div class="loading-spinner" style="width: 16px; height: 16px; margin-right: 8px;"></div>Refreshing...';
        refreshBtn.disabled = true;

        // Simulate data refresh with slight price variations
        setTimeout(() => {
            this.companies.forEach(company => {
                // Simulate small price changes
                const currentPrice = parseFloat(company.stockPrice.price);
                const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
                const newPrice = currentPrice * (1 + variation);
                const change = newPrice - currentPrice;
                const changePercent = (change / currentPrice) * 100;

                company.stockPrice.price = newPrice.toFixed(2);
                company.stockPrice.change = change.toFixed(2);
                company.stockPrice.change_percent = changePercent.toFixed(2);
            });

            this.lastUpdated = new Date();
            this.renderCompanies();
            this.updateDashboardStats();
            this.updateLastUpdated();

            // Restore button
            refreshBtn.innerHTML = originalText;
            refreshBtn.disabled = false;
        }, 1500);
    }

    startAutoRefresh() {
        // Auto refresh every 12 hours (43,200,000 milliseconds)
        setInterval(() => {
            this.refreshData();
        }, 43200000);
    }

    formatNumber(num) {
        return parseFloat(num).toLocaleString('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    formatVolume(volume) {
        const num = parseFloat(volume);
        if (num >= 10000000) return `${(num / 10000000).toFixed(1)}Cr`;
        if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
        return num.toLocaleString('en-IN');
    }

    formatMarketCap(marketCap) {
        const num = parseFloat(marketCap);
        if (num >= 100000) return `${(num / 100000).toFixed(1)}L Cr`;
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K Cr`;
        return `${num.toFixed(0)} Cr`;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StockTracker();
});
