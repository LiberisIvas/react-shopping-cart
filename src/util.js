export default function formatCurrency(num) {
    return "EUR " + Number(num.toFixed(2)).toLocaleString() + " ";
}